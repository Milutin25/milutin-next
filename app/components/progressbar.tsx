interface ProgressProps {
    value: number;
    color: string;
    label: string;
  }
  
  export default function Progress({ value, color, label }: ProgressProps) {
    return (
      <div className="progress_inner">
        <span>{label}</span>
        <div className="background">
          <div
            className="bar_in"
            style={{ width: `${value}%`, backgroundColor: color }}
          ></div>
          <div className="bar"></div>
        </div>
        <span className="number">{`${value}%`}</span>
      </div>
    );
  };
  