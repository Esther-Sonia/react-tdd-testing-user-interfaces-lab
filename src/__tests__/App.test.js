import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole('heading', {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text identifying the content", () => {
  render(<App />);
  const image = screen.getByAltText(/your name/i); 
  expect(image).toBeInTheDocument();
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole('heading', {
    name: /about me/i,
    level: 2,
  });
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/here is my biography.../i); 
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole('link', {
    name: /github/i,
  });
  expect(githubLink).toHaveAttribute('href', 'https://github.com/your-username');
});

test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole('link', {
    name: /linkedin/i,
  });
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-username');
});
