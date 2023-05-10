import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '0 2rem',
    color: theme.palette.mode === 'dark' ? '#efefef' : 'inherit',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'inherit',
  },
  main: {
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: '0',
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
    '& a': {
      color: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
      textDecoration: 'none',
      '&:hover': { textDecoration: 'underline' },
      '&:focus': { textDecoration: 'underline' },
      '&:active': { textDecoration: 'underline' },
    },
  },
  description: {
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  code: {
    background: theme.palette.mode === 'dark' ? '#050505' : '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,\n    Bitstream Vera Sans Mono, Courier New, monospace',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
  },
  card: {
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    '& h2': { margin: '0 0 1rem 0', fontSize: '1.5rem' },
    '& p': { margin: '0', fontSize: '1.25rem', lineHeight: 1.5 },
    '&:hover': {
      color: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
      borderColor: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
    },
    '&:focus': {
      color: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
      borderColor: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
    },
    '&:active': {
      color: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
      borderColor: theme.palette.mode === 'dark' ? '#fa7a18' : '#0070f3',
    },
  },
  logo: { height: '1em', marginLeft: '0.5rem' },
}))
