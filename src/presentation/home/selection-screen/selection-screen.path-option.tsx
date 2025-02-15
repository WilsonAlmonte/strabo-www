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
          'hover:ring-primary tooltip-right tooltip tooltip-primary cursor-pointer rounded-sm p-2 transition-colors hover:ring-2 ' +
          (selected ? 'bg-(--char-color)/10' : '')
        }
        rel='button'
        onClick={onSelected}
      >
        <p className='text-base-100 font-body text-xl font-bold'>
          {order}. {label}
        </p>
        {content && (
          <p className='text-base-100 font-body mt-2 text-lg'>{content}</p>
        )}
      </div>
      {showDivider && <div className='divider divider-primary'></div>}
    </>
  );
};
