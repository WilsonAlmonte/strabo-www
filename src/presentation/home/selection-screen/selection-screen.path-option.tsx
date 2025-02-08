interface SelectionScreenPathOptionProps {
  label: string;
  content?: string;
  selected: boolean;
  order: number;
  onSelected: () => void;
  optionTip: string;
  showDivider?: boolean;
}

export const SelectionScreenPathOption: React.FC<
  SelectionScreenPathOptionProps
> = ({
  selected,
  label,
  order,
  onSelected,
  content,
  optionTip,
  showDivider,
}) => {
  return (
    <>
      <div
        data-tip={optionTip}
        className={
          "hover:ring-2 hover:ring-primary p-2 rounded-sm cursor-pointer tooltip-right tooltip tooltip-primary transition-colors " +
          (selected ? "bg-(--char-color)/10" : "")
        }
        rel="button"
        onClick={onSelected}
      >
        <p className="text-base-100 font-body font-bold text-xl">
          {order}. {label}
        </p>
        {content && (
          <p className="text-base-100 font-body text-lg mt-2">{content}</p>
        )}
      </div>
      {showDivider && <div className="divider divider-primary"></div>}
    </>
  );
};
