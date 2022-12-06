import { render, screen } from '@testing-library/react';
import App from './App';

test('Buscar por nombre', () => {
  render(<App />);
  const linkElement = screen.getByText(/RRHH/i);
  expect(linkElement).toBeInTheDocument();
});
test('Buscar por numero', () => {
  render(<App />);
  const linkElement = screen.getByText(/56920198682/i);
  expect(linkElement).toBeInTheDocument();
});
test('Buscar por nombre', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fabio Fuentes Jefe/i);
  expect(linkElement).toBeInTheDocument();
});
test('Buscar por numero', () => {
  render(<App />);
  const linkElement = screen.getByText(/56945203736/i);
  expect(linkElement).toBeInTheDocument();
});
test('Buscar por nombre', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jesus Correa contabilidad/i);
  expect(linkElement).toBeInTheDocument();
});
test('Buscar por numero', () => {
  render(<App />);
  const linkElement = screen.getByText(/56945872165/i);
  expect(linkElement).toBeInTheDocument();
});
