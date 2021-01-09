import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export const PaginationContainer = () => {
    return (
        <div className='pagination-container'>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};
