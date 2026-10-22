import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('a CLI project offers source access without a website action', () => {
  render(<ProjectCard title="DevOps Agent" source="https://github.com/example/agent" featured category="AI / Infrastructure" />);
  expect(screen.getByRole('button', { name: /source code/i })).toHaveAttribute('href', 'https://github.com/example/agent');
  expect(screen.queryByRole('button', { name: /live demo/i })).not.toBeInTheDocument();
  expect(screen.getByText('Source Available')).toBeInTheDocument();
  expect(screen.queryByText('Not Live Yet')).not.toBeInTheDocument();
});

test('a prototype can also have source available', () => {
  render(<ProjectCard title="Hackathon Project" source="https://github.com/example/prototype" prototype />);
  expect(screen.getByText('Prototype')).toBeInTheDocument();
  expect(screen.getByText('Source Available')).toBeInTheDocument();
});

test('a private repository has no public source action', () => {
  render(<ProjectCard title="Private Project" source="https://github.com/example/private" privateRepository website="https://example.com" />);
  expect(screen.getByText('Private Repository')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /source code/i })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /live demo/i })).toHaveAttribute('rel', 'noopener noreferrer');
});
