export const Title = ({ title }: { title: string }) => {
  return (
    <div className="title">
      <svg>
        <use href="./circle-bullet.svg" />
      </svg>
      <h2>{title}</h2>
    </div>
  );
};
