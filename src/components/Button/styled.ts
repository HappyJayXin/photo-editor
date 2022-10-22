import styled, { css, DefaultTheme } from 'styled-components';
import type { ColorType } from '@/types/theme';

// Variant
type VariantStyles = {
  theme: DefaultTheme;
  color: ColorType;
  fullWidth?: boolean;
};

const variantStyles = ({ theme, color }: VariantStyles) => ({
  contained: css`
    background: ${theme.colors[color].main};
    color: ${theme.colors[color].contrastText};
    &:hover:not([disabled]) {
      background: ${theme.colors[color].dark};
    }
    &:active:not([disabled]) {
      background: ${theme.colors[color].dark};
    }
    &:disabled {
      background: ${theme.colors.grey[300]};
    }
  `,

  outlined: css`
    background: transparent;
    color: ${theme.colors[color].main};
    border-color: ${theme.colors[color].main};
    border: 1px solid;
    &:hover:not([disabled]) {
      background: ${theme.colors[color].main};
      color: ${theme.colors[color].contrastText};
      border-color: ${theme.colors[color].light};
    }
    &:active:not([disabled]) {
      background: ${theme.colors[color].light};
    }
    &:disabled {
      color: ${theme.colors.grey[300]};
      border-color: ${theme.colors.grey[300]};
    }
  `,

  text: css`
    background: transparent;
    color: ${theme.colors[color].main};
    &:hover:not([disabled]) {
      background: ${theme.colors[color].light};
      color: ${theme.colors[color].contrastText};
    }
    &:active:not([disabled]) {
      background: ${theme.colors[color].light};
    }
    &:disabled {
      color: ${theme.colors.grey[300]};
    }
  `,
});

export type Variant = keyof ReturnType<typeof variantStyles>;

// Size
const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 6px 12px;
  `,
  medium: css`
    font-size: 14px;
    padding: 8px 12px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 16px;
  `,
};

export type Size = keyof typeof sizeStyles;

type StyleProps = {
  color?: ColorType;
  variant?: Variant;
  fullWidth?: boolean;
  size?: Size;
  minWidth?: string;
};

const buttonStyle = ({ fullWidth, minWidth = '110px' }: StyleProps) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-width: 0;
  font-style: normal;
  box-sizing: border-box;
  transition: all 0.1s linear;
  outline: none;
  border-radius: 16px;
  min-width: ${fullWidth ? '100%' : minWidth};
`;

export const GlobalButton = styled.button<StyleProps>`
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

  ${buttonStyle};
  ${({ variant = 'contained', color = 'primary', theme }) =>
    variantStyles({ theme, color })[variant]}
  ${({ size = 'medium' }) => sizeStyles[size]}
`;

export const GlobalLink = styled.a<StyleProps>`
  ${buttonStyle};
  ${({ variant = 'contained', color = 'primary', theme }) =>
    variantStyles({ theme, color })[variant]}
  ${({ size = 'medium' }) => sizeStyles[size]}
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
  display: flex;
`;
