import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  onBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function BackButton({ onBack }: Props) {
  return (
    <IconButton onClick={onBack}>
      <ArrowBackIcon />
    </IconButton>
  );
}
