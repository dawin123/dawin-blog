import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { PAGE_PER_FOLD } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { getBlogListState } from '../../redux/blog-list/reducer';
import { setCurrentPage, fetchBlogList } from '../../redux/blog-list/actions';

export const BlogPagination: React.FC = () => {
    const { currentPage, totalPage } = useSelector(getBlogListState);
    const dispatch = useDispatch();
    const start = Math.floor(currentPage / 5) * PAGE_PER_FOLD + 1;
    const end = Math.min(start + PAGE_PER_FOLD, totalPage + 1);
    const pages = [];
    for (let i = start; i < end; i++) {
        pages.push(i);
    }

    const goToPage = (page: number) => () => {
        if (page !== currentPage) {
            dispatch(setCurrentPage(page));
            dispatch(fetchBlogList());
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
