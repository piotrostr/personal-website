interface Props {
  title: string;
  emoji: string;
  description: string;
}

export const Card = ({ title, emoji, description }: Props) => (
  <div>
    <div>
      {title} {emoji}
    </div>
    <div>{description}</div>
  </div>
);
