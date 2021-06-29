import { useForm } from 'react-hook-form';
import styles from '../styles/Form.module.sass';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	const deliveryTimes = [
		'8:00am - 8:30am',
		'8:45am - 9:00am',
		'9:00am',
		'9:30am',
		'10:00am',
		'10:30am',
		'11:00am',
	];
	const bakedGoods = [
		'Savory Croissant',
		'Pain Au Chocolat',
		'Raspberry Mascarpone Croissant',
		'Blueberry Muffin',
		'Cranberry Orange Muffin',
	];
	const savory = [
		'Ham & Cheese Quiche',
		'Broccoli & Cheese Quiche',
		'Ham & Cheese Crustless Frittata',
		'Broccoli & Cheese Crustless Frittata (GF)',
		'Hardboiled Eggs',
	];
	const yogurtCereal = [
		'Vanilla Yogurt',
		'Vanilla Yogurt with Granola',
		'Special K',
		'Cheerios (GF)',
		'Froot Loops',
		'Rice Krispies',
	];
	const cerealMilk = ['Whole', 'Almond', 'Oat', 'Soy'];
	const hotBeverages = [
		'Coffee',
		'Decaf Coffee',
		'Earl Grey Black Tea',
		'Green Tea',
		'Chai Tea',
		'English Breakfast Tea',
		'English Breakfast Decaf Tea',
		'Hot Chocolate',
	];
	const beverageMilk = ['Whole', 'Almond', 'Oat', 'Soy'];
	const coldBeverages = [
		'Orange Juice',
		'Apple Juice',
		'Whole Milk',
		'Almond Milk',
		'Oat Milk',
		'Soy Milk',
	];
	const fruit = ['Apple', 'Orange', 'Banana', 'Clementine Orange'];
	const addOns = [
		'Butter',
		'Honey',
		'Grape Jam',
		'Mixed Fruit Jelly',
		'Sugar',
		'Stevia',
		'Creamer',
	];

	return (
		<form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
			<section className={styles.guestInfo}>
				<label className={styles.basicLabel} htmlFor='name'>
					Name
				</label>
				<input
					type='text'
					id='name'
					className={styles.textInput}
					{...register('name', { required: true })}
				/>

				<label className={styles.basicLabel} htmlFor='email'>
					Email
				</label>
				<input
					type='email'
					id='email'
					className={styles.textInput}
					{...register('email', { required: true })}
				/>

				<label className={styles.basicLabel} htmlFor='roomNumber'>
					Room Number
				</label>
				<input
					type='number'
					id='roomNumber'
					className={styles.textInput}
					{...register('roomNumber', { required: true })}
				/>
			</section>
			{/* DELIVERY TIME */}
			<section className='deliveryTime'>
				<h3>Delivery Time</h3>
				<div className={styles.options}>
					{deliveryTimes.map((time) => {
						return (
							<div key={time}>
								<input
									{...register('deliveryTime', {
										required: true,
									})}
									type='radio'
									value={time}
									id={`time-${time}`}
								/>
								<label htmlFor={`time-${time}`}>{time}</label>
							</div>
						);
					})}
				</div>
			</section>

			{/* BAKED GOODS */}
			<section className='bakedGoods'>
				<h3>Baked Goods</h3>
				<div className={styles.options}>
					{bakedGoods.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('bakedGoods')}
									type='radio'
									value={item}
									id={`baked-${item}`}
								/>
								<label htmlFor={`baked-${item}`}>{item}</label>
							</div>
						);
					})}
				</div>
			</section>

			{/* SAVORY */}
			<section className='savory'>
				<h3>Savory</h3>
				<div className={styles.options}>
					{savory.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('savory')}
									type='radio'
									value={item}
									id={`savory-${item}`}
								/>
								<label htmlFor={`savory-${item}`}>{item}</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* CEREAL AND YOGURT */}
			<section className='yogurtCereal'>
				<h3>Yogurt & Cereal</h3>
				<div className={styles.options}>
					{yogurtCereal.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('yogurtCereal')}
									type='radio'
									value={item}
									id={`yogurtCereal-${item}`}
								/>
								<label htmlFor={`yogurtCereal-${item}`}>
									{item}
								</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* MILK FOR CEREAL */}
			<section className='cerealMilk'>
				<h3>Milk For Cereal</h3>
				<div className={styles.options}>
					{cerealMilk.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('cerealMilk')}
									type='radio'
									value={item}
									id={`cerealMilk-${item}`}
								/>
								<label htmlFor={`cerealMilk-${item}`}>
									{item}
								</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* HOT BEVERAGES */}
			<section className='hotBeverages'>
				<h3>Hot Beverages</h3>
				<div className={styles.options}>
					{hotBeverages.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('hotBeverages')}
									type='radio'
									value={item}
									id={`hotBeverages-${item}`}
								/>
								<label htmlFor={`hotBeverages-${item}`}>
									{item}
								</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* MILK FOR BEVERAGES */}
			<section className='beverageMilk'>
				<h3>Milk for Beverages</h3>
				<div className={styles.options}>
					{beverageMilk.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('beverageMilk')}
									type='radio'
									value={item}
									id={`beverageMilk-${item}`}
								/>
								<label htmlFor={`beverageMilk-${item}`}>
									{item}
								</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* COLD BEVERAGES */}
			<section className='coldBeverages'>
				<h3>Cold Beverages</h3>
				<div className={styles.options}>
					{coldBeverages.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('coldBeverages')}
									type='radio'
									value={item}
									id={`coldBeverages-${item}`}
								/>
								<label htmlFor={`coldBeverages-${item}`}>
									{item}
								</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* FRUIT */}
			<section className='fruit'>
				<h3>Fruit</h3>
				<div className={styles.options}>
					{fruit.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('fruit')}
									type='radio'
									value={item}
									id={`fruit-${item}`}
								/>
								<label htmlFor={`fruit-${item}`}>{item}</label>
							</div>
						);
					})}
				</div>
			</section>
			{/* ADD ONS */}
			<section className='addOns'>
				<h3>Add Ons</h3>
				<div className={styles.options}>
					{addOns.map((item) => {
						return (
							<div key={item}>
								<input
									{...register('addOns')}
									type='checkbox'
									value={item}
									id={`addOns-${item}`}
								/>
								<label htmlFor={`addOns-${item}`}>{item}</label>
							</div>
						);
					})}
				</div>
			</section>

            <section className="specialInstructions">
                <h3>Special Instructions</h3>
                <textarea {...register("Special Instructions")} className={styles.textArea} />
            </section>

			{/* SUBMIT BUTTON */}
			<section className='buttons'>
				<button type='submit' className={styles.submitButton}>Place Order</button>
			</section>
		</form>
	);
}
