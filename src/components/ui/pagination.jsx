import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export function Pagination({ className, ...props }) {
  return (
    <nav
      className={cn("flex w-full justify-center", className)}
      {...props}
    />
  );
}

export function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

export function PaginationItem({ className, ...props }) {
  return <li className={cn("", className)} {...props} />;
}

export function PaginationPrevious({ onClick, disabled }) {
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={disabled}
      onClick={onClick}
    >
      Previous
    </Button>
  );
}

export function PaginationNext({ onClick, disabled }) {
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={disabled}
      onClick={onClick}
    >
      Next
    </Button>
  );
}
