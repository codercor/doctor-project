const SearchIcon = ({ color="#8E966B" }: { color?: string }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5006 11H11.7106L11.4306 10.73C12.6306 9.33002 13.2506 7.42002 12.9106 5.39002C12.4406 2.61002 10.1206 0.390015 7.32063 0.0500152C3.09063 -0.469985 -0.469374 3.09001 0.0506256 7.32001C0.390626 10.12 2.61063 12.44 5.39063 12.91C7.42063 13.25 9.33063 12.63 10.7306 11.43L11.0006 11.71V12.5L15.2506 16.75C15.6606 17.16 16.3306 17.16 16.7406 16.75C17.1506 16.34 17.1506 15.67 16.7406 15.26L12.5006 11ZM6.50063 11C4.01063 11 2.00063 8.99002 2.00063 6.50002C2.00063 4.01002 4.01063 2.00002 6.50063 2.00002C8.99063 2.00002 11.0006 4.01002 11.0006 6.50002C11.0006 8.99002 8.99063 11 6.50063 11Z" fill={color} />
        </svg>
    );
}

export default SearchIcon;