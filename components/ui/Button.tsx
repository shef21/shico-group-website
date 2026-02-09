import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type BaseButtonProps = {
  children: ReactNode;
  variant?: "primary";
  className?: string;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary", ...rest } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-sm font-semibold transition-colors transition-transform transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const sizeClasses = "px-8 py-4 text-base md:text-lg";
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-white hover:-translate-y-px hover:shadow-md disabled:bg-accent disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
      : "";

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as AnchorHTMLAttributes<
      HTMLAnchorElement
    >;

    return (
      <Link href={href} className={classes} {...(linkRest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

