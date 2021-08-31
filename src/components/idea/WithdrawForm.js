import { Link } from "react-router-dom";

//Styling
import { Button, Form } from "../../style";
import "../../withdraw.css";

const WithdrawForm = () => {
  return (
    <>
      <div class="row">
        <div class="col-75">
          <div class="container">
            <Form action="/action_page.php">
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i class="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">
                    <i class="fa fa-envelope"></i> IBAN
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="IBAN"
                  />
                  <label for="adr">
                    <i class="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <i class="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Amman"
                  />

                  <div class="row">
                    <div class="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="00000"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/ThankYouPage">
                <Button>Continue to checkout</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default WithdrawForm;
