
import { style } from '@vanilla-extract/css';

export const pageContainer: string = style({
  textAlign: 'center',
})

export const titleContainer: string = style({
  marginBottom: '3.4rem',
  '@media': {
    'screen and (min-width: 768px)': {
    }
  },
})

export const subTitleClass: string = style({
  marginTop: '7rem',
  fontSize: '1.6rem',
  fontWeight: '600',
  color: '#CD2C2E',
  fontFamily: '"Bebas", cursive',
  marginBottom: '1.6rem',
  letterSpacing: '0.05em',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '2.4rem',
    }
  }
});

export const titleClass: string = style({
  fontSize: '2.4rem',
  letterSpacing: '0.05em',
  fontWeight: '600',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '4.8rem',
    }
  }
});


export const contentContainer: string = style({
  marginBottom: '2rem',
  '@media': {
    'screen and (min-width: 768px)': {
    }
  }
});

export const content: string = style({
  fontSize: '1.5rem',
  color: '#666666',
  letterSpacing: '0.05em',
  lineHeight: '1.7em',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.7rem',
    }
  }
});

export const mailContainer: string = style({
  marginBottom: '4rem',
  '@media': {
    'screen and (min-width: 768px)': {
      marginBottom: '8.3rem',
    }
  }
});

export const mail: string = style({
  fontSize: '1.5rem',
  color: '#666666',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.7rem',
    }
  }
});

export const buttonContainer: string = style({
  fontSize: '1.3rem',
  padding: '2rem 9rem',
  display: 'inline-block',
  backgroundColor: '#000000',
  border: '1px solid #000000',
  width: 'auto',
  color: '#FFFFFF',
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '1.5rem',
    }
  }
});
