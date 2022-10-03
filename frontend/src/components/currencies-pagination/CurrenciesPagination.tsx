import React from 'react';

const LIMIT = 25

interface CurrenciesPaginationComponentProps {
    page: number,
    total: number,
    onChange: any
}

const CurrenciesPagination = ({
    page,
    total,
    onChange = () => {}
}: CurrenciesPaginationComponentProps) => {
    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div >
            {Array
                .from({length: totalPages},
                    (_, index) => index + 1)
                .map(pageIndex => {
                    const isActive = pageIndex === page;
                    const action = () => {
                        if (pageIndex !== page) {
                            onChange(pageIndex);
                        }
                    };

                    return isActive ? (
                        <b key={pageIndex} onClick={action}>
                            {' '}{pageIndex}{' '}
                        </b>
                    ) : (
                        <span key={pageIndex} onClick={action}>
                            {' '}{pageIndex}{' '}
                        </span>
                    );
                })
            }
        </div>
    )
};

export default CurrenciesPagination;