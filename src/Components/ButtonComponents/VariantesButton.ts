 export interface ButtonStyle{
  button: {
    backgroundColor: string;
  },
  title:{
    color: string;
  },
  icon:{
    color: string;
  }
 }

 export interface ButtonVariant{
  enabled : ButtonStyle;
  disabled : ButtonStyle;
 }

 export const buttonPrimary: ButtonVariant = {
  enabled:{
    button: {
      backgroundColor: '#C67C4E'
    },
    title: {
      color: "#FFFFFF"
    },
    icon: {
      color: "#FFFFFF"
    }
  },
  disabled: {
    button: {
      backgroundColor: '#BDBDBD'
    },
    title:{
      color:'#FFFFFF'
    },
    icon:{
      color: '#FFFFFF',
    }
  }
}

export const variants = {
  Primary : buttonPrimary,
}