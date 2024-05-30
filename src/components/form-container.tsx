import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
  header: string;
  children: React.ReactNode;
}

function FormContainer({ header, children }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{header}</CardTitle>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default FormContainer;
