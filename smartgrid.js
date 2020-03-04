module.exports = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1140px',
        fields: '15px' // >= offset/2
    },
    breakPoints: {
        // lg: {
        //     width: '1000px',
        // },
        md: {
            width: '965px'
        },
        sm: {
            width: '768px',
            fields: '77px'
        },
        xs: {
            width: '694px'
        },
        xxs: {
            width: '480px',
            fields: '20px'
        }
        // xxxs: {
		// 	width: '320px',
        // }
	},
	detailedCalc: true 
};