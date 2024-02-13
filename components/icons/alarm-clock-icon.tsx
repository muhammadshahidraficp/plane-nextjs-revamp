import type { Props } from "./types";

export const AlarmClockIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = "rgb(var(--color-text-200))",
  className,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.98125 15.4609C8.05625 15.4609 7.18437 15.2859 6.36562 14.9359C5.54687 14.5859 4.83437 14.1078 4.22812 13.5016C3.62187 12.8953 3.14062 12.1828 2.78437 11.3641C2.42812 10.5453 2.25 9.66886 2.25 8.73469C2.25 7.80053 2.42812 6.92553 2.78437 6.10969C3.14062 5.29386 3.62187 4.57969 4.22812 3.96719C4.83437 3.35469 5.54687 2.87344 6.36562 2.52344C7.18437 2.17344 8.05625 1.99844 8.98125 1.99844C9.90625 1.99844 10.7781 2.17344 11.5969 2.52344C12.4156 2.87344 13.1312 3.35469 13.7437 3.96719C14.3562 4.57969 14.8375 5.29386 15.1875 6.10969C15.5375 6.92553 15.7125 7.80053 15.7125 8.73469C15.7125 9.66886 15.5375 10.5453 15.1875 11.3641C14.8375 12.1828 14.3562 12.8953 13.7437 13.5016C13.1312 14.1078 12.4156 14.5859 11.5969 14.9359C10.7781 15.2859 9.90625 15.4609 8.98125 15.4609ZM11.25 11.7859L12.0375 10.9984L9.6 8.56094V4.99844H8.475V9.01094L11.25 11.7859ZM4.0125 0.742188L4.8 1.52969L1.725 4.49219L0.9375 3.70469L4.0125 0.742188ZM13.95 0.742188L17.025 3.70469L16.2375 4.49219L13.1625 1.52969L13.95 0.742188ZM8.98206 14.3359C10.544 14.3359 11.8687 13.7919 12.9562 12.7039C14.0437 11.6158 14.5875 10.2908 14.5875 8.72888C14.5875 7.16692 14.0435 5.84219 12.9554 4.75469C11.8674 3.66719 10.5424 3.12344 8.98044 3.12344C7.41848 3.12344 6.09375 3.66746 5.00625 4.75549C3.91875 5.84353 3.375 7.16853 3.375 8.73049C3.375 10.2925 3.91902 11.6172 5.00706 12.7047C6.09509 13.7922 7.42009 14.3359 8.98206 14.3359Z"
      fill="#F7AE59"
    />
  </svg>
);
