'use client';

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { PAGE_PER_FOLD } from '../../constants';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Props {
    currentPage: number;
    totalPage: number;
}

export const BlogPagination: React.FC<Props> = ({ currentPage, totalPage }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push, refresh } = useRouter();

    const start = Math.floor(currentPage / 5) * PAGE_PER_FOLD + 1;
    const end = Math.min(start + PAGE_PER_FOLD, totalPage + 1);
    const pages: number[] = [];
    for (let i = start; i < end; i++) {
        pages.push(i);
    }

    const goToPage = (page: number) => () => {
        if (page !== currentPage) {
            const params = new URLSearchParams(searchParams ?? '');
            if (page === 1) {
                params.delete('page');
            } else {
                params.set('page', page.toString());
            }

            push(`${pathname}?${params.toString()}`);
            refresh();
        }
    };

    return (
        <div className='pagination-container'>
            <Pagination>
                {currentPage > 1 && <Pagination.First onClick={goToPage(1)} />}
                {currentPage > 1 && (
                    <Pagination.Prev onClick={goToPage(currentPage - 1)} />
                )}
                {pages.map(pageNo => {
                    return (
                        <Pagination.Item
                            key={pageNo}
                            active={pageNo === currentPage}
                            onClick={goToPage(pageNo)}
                        >
                            {pageNo}
                        </Pagination.Item>
                    );
                })}
                {currentPage < totalPage && (
                    <Pagination.Next onClick={goToPage(currentPage + 1)} />
                )}
                {currentPage < totalPage && (
                    <Pagination.Last onClick={goToPage(totalPage)} />
                )}
            </Pagination>
        </div>
    );
};
