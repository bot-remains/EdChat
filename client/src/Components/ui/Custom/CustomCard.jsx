import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PropTypes from 'prop-types';

function CustomCard({ title, description, body, footer }) {
  return (
    <Card className="w-1/4 ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
CustomCard.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
};

export default CustomCard;
