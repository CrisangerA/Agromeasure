import { Dimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
const Width = width;

export const Size = {
    col05: Width * 0.0416666666666667, //* 0.05,
    col1: Width * 0.0833333333333333, //* 0.1,
    col15: Width * 0.125, // 1.5
    col2: Width * 0.166666666667, // 2
    col25: Width * 0.208333333333333, // 2.5
    col3: Width * 0.25, // 3
    col35: Width * 0.291666666666667, // 3.5
    col4: Width * 0.333333333333333,
    col45: Width * 0.375,
    col5: Width * 0.416666666666667,
    col55: Width * 0.458333333333333,
    col6: Width * 0.50,
    col65: Width * 0.541666666666667,
    col7: Width * 0.583333333333333,
    col75: Width * 0.625,
    col8: Width * 0.666666666666667,
    col85: Width * 0.708333333333333,
    col9: Width * 0.75,
    col95: Width * 0.791666666666667,
    col10: Width * 0.833333333333333,
    col105: Width * 0.875,
    col11: Width * 0.916666666666667,
    col115: Width * 0.958333333333333,
    col12: Width,
    title: Width * 0.0833333333333333, //* 0.1,,
    text: Width * 0.0416666666666667, //* 0.05,
    textButton: Width * 0.0416666666666667,
    border: (Width * 0.0416666666666667) / 2
  };

export const Colors = {
    Button: '#9AE638',
    Withe: '#ffffff',
    Black: '#000000',
    Input: '#9AE638'
}

export const Style = {
    container: {
        flex: 1,
        backgroundColor: Colors.Withe        
    },
    title: {
        fontSize: Size.title,
        color: Colors.Withe,
        textAlign: 'center',
        textShadowColor: Colors.Black,
        textShadowRadius: 5,                
    },
    form: {
        width: Size.col11,
        backgroundColor: Colors.Withe,
        marginLeft: Size.col05,        
        paddingVertical: Size.col05,
        borderRadius: Size.border,
        opacity: 0.85
    },
    input: {
        width: Size.col10,
        height: Size.col15,
        backgroundColor: Colors.Input,                
        borderRadius: Size.border,
        marginLeft: Size.col05,
        marginBottom: Size.col05,
        color: Colors.Black,
        paddingLeft: Size.border,
        fontSize: Size.textButton - 5,
        justifyContent: 'center'
    },
    button: {
        width: Size.col8,
        height: Size.col15,
        backgroundColor: Colors.Button,
        borderRadius: Size.border,
        marginLeft: Size.col15,        
        alignItems: 'center', // Horizontal
        justifyContent: 'center', // Vertical        
    },
    buttonText: {           
        color: Colors.Withe,        
        fontSize: Size.textButton - 3     
    },
    text: {
        fontSize: Size.textButton - 3,
        color: Colors.Black
    }
}