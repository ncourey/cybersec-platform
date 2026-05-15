"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { Resizable } from "re-resizable";

import { cn } from "./utils";

function ResizableDialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function ResizableDialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function ResizableDialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function ResizableDialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

const ResizableDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentProps<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot="dialog-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      className,
    )}
    {...props}
  />
));
ResizableDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface ResizableDialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  defaultWidth?: number;
  defaultHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

function ResizableDialogContent({
  className,
  children,
  defaultWidth = 800,
  defaultHeight = 600,
  minWidth = 400,
  minHeight = 300,
  maxWidth = "95vw",
  maxHeight = "95vh",
  ...props
}: ResizableDialogContentProps) {
  return (
    <ResizableDialogPortal data-slot="dialog-portal">
      <ResizableDialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] bg-transparent",
          className,
        )}
        {...props}
      >
        <Resizable
          defaultSize={{
            width: defaultWidth,
            height: defaultHeight,
          }}
          minWidth={minWidth}
          minHeight={minHeight}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          className="bg-background border rounded-lg shadow-lg overflow-hidden"
          handleStyles={{
            bottom: {
              background: "rgba(255, 255, 255, 0.1)",
              height: "8px",
              cursor: "ns-resize",
            },
            right: {
              background: "rgba(255, 255, 255, 0.1)",
              width: "8px",
              cursor: "ew-resize",
            },
            bottomRight: {
              background: "rgba(255, 255, 255, 0.2)",
              width: "12px",
              height: "12px",
              cursor: "nw-resize",
            },
          }}
        >
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-auto p-6">
              {children}
            </div>
          </div>
          <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 z-10">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </Resizable>
      </DialogPrimitive.Content>
    </ResizableDialogPortal>
  );
}

function ResizableDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left pb-4 border-b border-border", className)}
      {...props}
    />
  );
}

function ResizableDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end pt-4 border-t border-border mt-4",
        className,
      )}
      {...props}
    />
  );
}

function ResizableDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function ResizableDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  ResizableDialog,
  ResizableDialogClose,
  ResizableDialogContent,
  ResizableDialogDescription,
  ResizableDialogFooter,
  ResizableDialogHeader,
  ResizableDialogOverlay,
  ResizableDialogPortal,
  ResizableDialogTitle,
  ResizableDialogTrigger,
};