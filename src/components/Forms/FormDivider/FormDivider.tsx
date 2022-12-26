const FormDivider = () => {
    return (
        <div className='w-full h-[1px] my-[30px] bg-[#E5E5E5] flex items-center justify-center' >
            <svg width="72" className='bg-[white] m-[10px]' height="25" viewBox="0 0 72 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.2506 18.2686C58.1048 19.4583 56.7643 20.1454 55.1591 20.3409C52.5823 20.6547 50.4739 18.0842 51.3482 15.6696C52.2429 13.1985 55.2651 11.479 57.7139 12.0558C58.872 12.3286 59.7177 13.0234 60.2806 14.0562C60.7756 14.9644 60.6964 15.8931 60.2317 16.7786C59.9636 17.2894 59.6019 17.7512 59.2506 18.2686ZM52.9092 15.2692C52.8583 15.5622 52.7696 15.8544 52.7637 16.1483C52.7449 17.0751 53.1658 17.4293 54.0885 17.301C55.0001 17.1743 56.0039 16.1096 56.0796 15.1891C56.1433 14.4145 55.6027 13.8727 54.8128 13.9443C53.9764 14.0202 53.4096 14.5206 52.9092 15.2692Z" fill="#D5D5D5" />
                <path d="M17.8318 24.4379C15.1741 24.9992 12.6178 24.7884 10.0562 24.0983C7.95218 23.5314 6.08908 22.5401 4.46175 21.1438C2.38068 19.3581 1.2133 16.9838 0.537749 14.3704C-0.170265 11.6315 -0.217991 8.8938 0.62789 6.15002C1.86769 2.12847 5.5232 -0.324792 9.78249 0.0348116C11.3934 0.170821 12.9309 0.529773 14.3625 1.27803C16.924 2.6169 18.2914 4.77613 18.7505 7.60177C19.0542 9.47116 18.711 11.2432 17.9019 12.8718C16.9547 14.7786 15.3832 16.0373 13.1753 16.2444C12.6821 16.2907 12.1635 16.0667 11.6567 15.9672C11.6597 15.888 11.6627 15.8089 11.6657 15.7298C11.9444 15.649 12.2241 15.5715 12.5016 15.4869C14.4667 14.8886 15.849 13.0532 15.7682 11.0278C15.6968 9.2388 14.7738 7.88867 13.2104 7.11223C11.68 6.35221 10.1117 6.40796 8.59717 7.36766C5.094 9.58755 4.73843 14.8461 7.62225 17.7572C9.86605 20.0222 12.6662 21.1455 15.7334 21.7079C16.6846 21.8823 17.65 22.0843 18.6092 22.0854C20.0032 22.087 21.4105 22.0012 22.7862 21.7863C23.4731 21.679 24.183 21.3074 24.7439 20.8755C27.3863 18.8408 30.0069 16.7756 32.5859 14.6612C35.9828 11.8762 39.3365 9.04647 43.0838 6.71761C45.8409 5.00416 48.7161 3.56007 51.7675 2.47097C54.7271 1.41457 57.7712 0.846739 60.9304 0.75857C63.5862 0.684452 66.122 1.08028 68.5656 2.07862C69.2587 2.36176 69.9013 2.77106 70.5574 3.13976C70.7118 3.22654 70.827 3.38321 70.9601 3.50773C70.9436 3.56724 70.9269 3.62676 70.9103 3.68627C70.6946 3.68627 70.4777 3.70111 70.2633 3.68403C67.2419 3.44334 64.4245 4.13312 61.8879 5.74838C59.1872 7.46822 56.5923 9.35355 53.9128 11.108C51.2139 12.8752 48.5369 14.6948 45.7206 16.2575C43.4732 17.5045 41.0624 18.48 38.6659 19.4291C36.2883 20.3707 33.8626 21.2111 31.4128 21.9452C28.6317 22.7786 25.8016 23.4489 22.9891 24.1758C22.7607 24.2349 22.5037 24.1836 22.26 24.1836C22.2437 24.1235 22.2274 24.0634 22.211 24.0032C22.3825 23.9138 22.5459 23.8014 22.7265 23.7382C26.22 22.5164 29.5041 20.8455 32.64 18.91C36.2482 16.683 39.7577 14.2969 43.3396 12.0264C46.2848 10.1595 49.2735 8.36114 52.2419 6.53062C52.4086 6.42782 52.5653 6.3089 52.7267 6.19748C52.6987 6.14933 52.6708 6.10118 52.6428 6.05303C51.7298 6.44978 50.8093 6.83036 49.9049 7.2461C46.0816 9.00379 42.5514 11.2779 38.9717 13.4654C36.1082 15.2153 33.2644 17.0003 30.355 18.6709C28.4016 19.7926 26.3472 20.7382 24.3423 21.7709C23.9037 21.9968 23.502 22.3012 23.0512 22.4949C21.7143 23.0693 20.3659 23.6181 19.0116 24.1506C18.6552 24.2907 18.2613 24.3354 17.8318 24.4379Z" fill="#D5D5D5" />
                <path d="M68.3026 14.1506C66.9999 14.8288 65.6805 15.3902 64.2504 14.9785C62.7173 14.5372 61.2716 13.859 60.767 12.1306C60.3229 10.6096 60.8284 9.26284 61.7424 8.08099C62.762 6.76262 64.0305 5.73123 65.7004 5.33092C66.9578 5.0295 68.2253 4.94219 69.4169 5.57479C71.7351 6.80551 72.893 9.36022 70.7752 11.9343C70.0892 12.7681 69.162 13.4033 68.3026 14.1506ZM62.7894 11.226C63.1728 11.6386 63.6417 11.6946 64.1514 11.5369C65.2508 11.1966 66.0059 10.4951 66.3973 9.40188C66.6138 8.79714 66.5576 8.23809 66.0885 7.79611C65.6033 7.33907 64.9935 7.25902 64.409 7.55989C63.6131 7.96954 62.9437 8.5316 62.6177 9.41544C62.3971 10.0138 62.3861 10.5902 62.7894 11.226Z" fill="#D5D5D5" />
                <path d="M42.8095 22.0738C42.767 21.663 42.6715 21.2919 42.7237 20.943C43.0797 18.5635 46.0136 16.6987 48.3287 17.3567C50.2808 17.9115 51.0267 19.8524 49.9938 21.5856C49.1686 22.9702 47.9468 23.7545 46.415 24.0989C45.0485 24.4061 43.2536 23.4029 42.8095 22.0738ZM46.6071 20.4046C46.8264 19.9605 46.9026 19.4464 46.457 19.1861C46.1216 18.9902 45.5852 18.9307 45.2133 19.0481C44.4417 19.2918 44.0571 20.0269 44.1084 20.8328C44.1517 21.5118 44.5165 21.853 45.1178 21.5847C45.655 21.345 46.0846 20.8641 46.6071 20.4046Z" fill="#D5D5D5" />
            </svg>
        </div>

    )
}

export default FormDivider