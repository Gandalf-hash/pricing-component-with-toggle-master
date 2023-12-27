function AppButton({ className }: { className?: string }) {
  return (
    <button
      className={`${className} w-full uppercase tracking-wider font-bold rounded-lg text-sm h-12`}
    >
      Learn More
    </button>
  );
}

export default AppButton;
