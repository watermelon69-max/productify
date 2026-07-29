import { Link } from "react-router";
import { CalendarIcon, UserIcon } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="card bg-base-300 hover:shadow-xl transition-shadow overflow-hidden">
      <figure className="p-4 pb-0">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base">{product.title}</h2>
        <p className="text-sm text-base-content/60 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-3 mt-2 text-xs text-base-content/50">
          {product.user && (
            <div className="flex items-center gap-1">
              <UserIcon className="size-3" />
              {product.user.name}
            </div>
          )}
          <div className="flex items-center gap-1">
            <CalendarIcon className="size-3" />
            {new Date(product.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
