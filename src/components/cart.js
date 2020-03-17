totalPrice = (cartData) => {
    let tot = 0
    console.log(cartData)
    console.log(this.props.currentUser)
    console.log(this.props.cart);
    // debugger
    let filt = cartData.filter((i)=> i.cart.id === this.props.currentUser.cart.id)
    filt.forEach((k)=> tot += (k.item.price * k.amount))
    return tot
  }