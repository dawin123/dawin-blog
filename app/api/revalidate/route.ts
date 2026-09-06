import { verifyRequest } from '@contentful/node-apps-toolkit';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const WEBHOOK_TTL_SECONDS = 60;

export async function POST(request: NextRequest) {
    const signingSecret = process.env.CONTENTFUL_WEBHOOK_SIGNING_SECRET;

    if (!signingSecret) {
        console.error('CONTENTFUL_WEBHOOK_SIGNING_SECRET is not configured');
        return NextResponse.json(
            { revalidated: false, message: 'Webhook is not configured' },
            { status: 500 }
        );
    }

    const body = await request.text();
    const headers = Object.fromEntries(request.headers.entries());

    try {
        const isVerified = verifyRequest(
            signingSecret,
            {
                method: 'POST',
                path: request.nextUrl.pathname,
                headers,
                body
            },
            WEBHOOK_TTL_SECONDS
        );

        if (!isVerified) {
            return NextResponse.json(
                { revalidated: false, message: 'Invalid webhook signature' },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error('Contentful webhook verification failed', error);
        return NextResponse.json(
            { revalidated: false, message: 'Invalid webhook signature' },
            { status: 401 }
        );
    }

    revalidatePath('/', 'layout');

    return NextResponse.json({ revalidated: true });
}
