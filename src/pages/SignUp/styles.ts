import { keyframes, styled } from '../../config/stitches.config'

export const alternateSizeIcon = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.1)' },
})

export const Container = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const Content = styled('div', {
  width: '100%',
  color: '$white',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 1.5rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  strong: {
    fontSize: '2rem',

    span: {
      color: '$green700',
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.825rem',
    marginTop: '4.5rem',
    width: '100%',

    button: {
      marginTop: '2rem',
    },
  },

  '@lg': {
    padding: '0 1rem',
  },
})
