import { forwardRef, ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
	<button
		className="flex gap-2 items-center rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600"
		ref={ref}
		{...props}
	/>
))

Button.displayName = 'Button'
