import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { themedPalette } from '@/styles/palette';

interface ButtonProps {
  layout?: 'inline' | 'fullWidth';
  size?: 'small' | 'medium';
  variant?: 'primary' | 'destructive' | 'text';
  icon?: React.ReactNode;
}

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  href?: string;
}

function Button({
  layout = 'inline',
  size = 'medium',
  variant = 'primary',
  href,
  icon,
  ...rest
}: Props) {
  if (href) {
    return (
      <StyledLink
        layout={layout}
        variant={variant}
        size={size}
        href={href}
        style={rest.style}
      >
        {icon}
        {rest.children}
      </StyledLink>
    );
  }
  return (
    <StyledButton layout={layout} variant={variant} size={size} {...rest} />
  );
}

const variantStyles = {
  primary: css`
    background: ${themedPalette.primary1};
    color: ${themedPalette.button_text};
    &:hover {
      background: ${themedPalette.primary2};
    }
  `,
  destructive: css`
    background: ${themedPalette.destructive1};
    color: ${themedPalette.button_text};
    &:hover {
      background: ${themedPalette.destructive2};
    }
  `,
  text: css`
    background: transparent;
    color: ${themedPalette.text3};
    text-decoration: none;
    &:hover {
      background: ${themedPalette.bg_element1};
      color: ${themedPalette.text2};
    }
  `,
};

const sizeStyles = {
  small: css`
    height: 36px;
    font-size: 14px;
    padding-left: 12px;
    padding-right: 12px;
  `,
  medium: css`
    height: 48px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
  `,
};

const sharedStyles = (props: ButtonProps) => css`
  display: flex;
  ${sizeStyles[props.size!]};
  ${variantStyles[props.variant!]!};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.16s ease-in-out;
  border: none;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:link {
    color: ${themedPalette.button_text};
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  &:disabled {
    filter: grayscale(0.6);
    opacity: 0.3;
  }
  ${props.layout === 'fullWidth' &&
  css`
    width: 100%;
  `}
`;

const StyledButton = styled.button<ButtonProps>`
  ${(props) => sharedStyles(props)}
`;

const StyledLink = styled(Link)<ButtonProps>`
  ${(props) => sharedStyles(props)}
`;

export default Button;