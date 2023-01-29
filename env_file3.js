template <typename T> struct scalar {

template <typename... Args> static std::shared_ptr<scalar<T>> create(Args &&...args) {
    return std::make_shared<scalar<T>>((std::forward<Args>(args))...);
  }

};


template <typename T>
std::shared_ptr<scalar<T>> operator+(std::shared_ptr<scalar<T>> &lhs,
                                     std::shared_ptr<scalar<T>> &rhs) {
  auto res = scalar<T>::create(lhs->data + rhs->data, {lhs, rhs}, "+");
  res->backward = [lhs, rhs, res]() {
    lhs->grad += res->grad;
    rhs->grad += res->grad;
  };
  return res;
}