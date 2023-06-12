import "./index.css";
export default function Contactus() {
  return (
   <>
   <section className="">
	<div className="m-20">
		<h3 className="align-center text-6xl text-center">Contact</h3>
		<div class="flex flex-wrap">
			<div className="m-10">
				<h4 class="m-5 text-2xl">Address Info</h4>
				<div class="row">
					<div class="col">
						<i class="icon" aria-hidden="true"></i>
					</div>
					<div class="flex">
						<h5 className="mr-5">Email :</h5>
						<p><a href="mailto:example@email.com">111abhiabhi@gmail.com</a></p>
					</div>
					<div class="col-1 pr-0 icon mt-4">
						<i class="fa fa-phone" aria-hidden="true"></i>
					</div>
					<div class="flex">
						<h5 className="mr-5">Phone :</h5>
						<p> +919497747142</p>
			
					</div>
					<div class="col-1 pr-0 icon mt-4">
						<i class="fa fa-map-marker" aria-hidden="true"></i>
					</div>
					<div class="col-11 mt-4">
						<h5>Address :</h5>
						<p>Mukkuttathil parambil House,valluvally</p>
            <p>Koonammavu po</p>
						<p> Ernakulam,kerala - 683518</p>
					</div>
				</div>
			</div>
			<div className="m-10">
				<h4 className="m-5 text-2xl">Get In Touch</h4>
				<form action="#" method="post">
					<label><i class="fa mr-2 fa-user" aria-hidden="true"></i> Name</label>
					<input type="text" className="nameClass" name="Name" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required=""></input>
					<div ></div>
					<label><i class="fas mr-2 fa-envelope-open" aria-hidden="true"></i>Email</label>
					<input type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required=""></input>
					<div class="clearfix"></div>
					<label><i class="fas mr-2 fa-phone" aria-hidden="true"></i>Phone</label>
					<input type="text" name="Phone" value="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" required=""></input>
					<div class="clearfix"></div>
					<label><i class="fas mr-2 fa-edit" aria-hidden="true"></i>Message</label>
					<textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</div>
  </section>

   </>
      
  );
}
