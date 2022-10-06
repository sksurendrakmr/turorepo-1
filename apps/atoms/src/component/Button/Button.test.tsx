import React from 'react'
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button should render', () => {
    render(<Button title="TestButton" />);
    const button = screen.getByRole('button', { name: /testbutton/i });
    expect(button).toBeInTheDocument();
})