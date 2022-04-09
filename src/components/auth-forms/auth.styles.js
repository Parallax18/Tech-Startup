export const authStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'DM Sans',
        mt: 4
    },
    header: {
        flexDirection: 'column',
        fontFamily: 'DM Sans',
        justifyContent: 'center',
        alignItems: 'center',

        sub:{
            fontFamily: 'DM Sans',
            mt: 30,
            mb: 30,
            color: 'grey',
            width: '75%',
            fontWeight: 'normal'
        }
    },

    formWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    google:{
        padding: 3,
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        cursor: 'pointer',

        '&:before': {
            position: 'absolute',
            content: "''",
            width: '100%',
            top: 0,
            left: 0,
            height: '100%',
            border: '1px solid rgba(38, 78, 118, 0.1)',
            borderRadius: 'inherit',
            transition: 'all 0.3s',
            zIndex: -1,
          },

          '&:hover': {
            boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
            '&:before': {
              opacity: 0,
            },
          },
        text:{
            ml: 3,
            color: 'dark-grey',
            width: '100%',
            textAlign: 'center'
        }
    },

    form: {
        width: '100%',

        formGroup: {
            justifyContent: 'space-between',

            formField: {
                width: '100%',
                mx: 3,
                mb: 3
            }
        }
    },
    formBtn: {
        background: '#00308F',
        padding: '1rem',
        cursor: 'pointer'
    }
}