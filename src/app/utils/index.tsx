import { 
  Fastfood, DirectionsCar, Home, 
  TheaterComedy, Construction, Payments 
} from '@mui/icons-material';
import { CategoryType } from 'src/types';



export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};


export const getCategoryIcon = (category: CategoryType) => {
  switch (category) {
    case 'Food': return <Fastfood />;
    case 'Transport': return <DirectionsCar />;
    case 'Rent': return <Home />;
    case 'Entertainment': return <TheaterComedy />;
    case 'Utilities': return <Construction />;
    default: return <Payments />;
  }
};