const FormSectionHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="text-[black] font-nexa-regular text-[18px]">
        {children}
      </div>
    </div>
  );
};

export default FormSectionHeader;
