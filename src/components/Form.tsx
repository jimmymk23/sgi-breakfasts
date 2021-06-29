import { useForm } from 'react-hook-form';
import styles from '../styles/Form.modue.sass';

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
		<form onSubmit={handleSubmit(onSubmit)}>
			section.
			<input
				type='text'
				placeholder='Name'
				{...register('name', { required: true })}
			/>
			<input
				type='email'
				placeholder='Email'
				{...register('email', { required: true })}
			/>
			<input
				type='number'
				placeholder='Room Number'
				{...register('roomNumber', { required: true })}
			/>
			{/* DELIVERY TIME */}
			{deliveryTimes.map((time) => {
				return (
					<div key={time}>
						<input
							{...register('deliveryTime', { required: true })}
							type='radio'
							value={time}
							id={`time-${time}`}
						/>
						<label htmlFor={`time-${time}`}>{time}</label>
					</div>
				);
			})}
			{/* BAKED GOODS */}
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
			{/* SAVORY */}
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
			{/* CEREAL AND YOGURT */}
			{yogurtCereal.map((item) => {
				return (
					<div key={item}>
						<input
							{...register('yogurtCereal')}
							type='radio'
							value={item}
							id={`yogurtCereal-${item}`}
						/>
						<label htmlFor={`yogurtCereal-${item}`}>{item}</label>
					</div>
				);
			})}
			{/* MILK FOR CEREAL */}
			{cerealMilk.map((item) => {
				return (
					<div key={item}>
						<input
							{...register('cerealMilk')}
							type='radio'
							value={item}
							id={`cerealMilk-${item}`}
						/>
						<label htmlFor={`cerealMilk-${item}`}>{item}</label>
					</div>
				);
			})}
			{/* HOT BEVERAGES */}
			{hotBeverages.map((item) => {
				return (
					<div key={item}>
						<input
							{...register('hotBeverages')}
							type='checkbox'
							value={item}
							id={`hotBeverages-${item}`}
						/>
						<label htmlFor={`hotBeverages-${item}`}>{item}</label>
					</div>
				);
			})}
			{/* MILK FOR BEVERAGES */}
			{beverageMilk.map((item) => {
				return (
					<div key={item}>
						<input
							{...register('beverageMilk')}
							type='checkbox'
							value={item}
							id={`beverageMilk-${item}`}
						/>
						<label htmlFor={`beverageMilk-${item}`}>{item}</label>
					</div>
				);
			})}
			{/* COLD BEVERAGES */}
			{coldBeverages.map((item) => {
				return (
					<div key={item}>
						<input
							{...register('coldBeverages')}
							type='radio'
							value={item}
							id={`coldBeverages-${item}`}
						/>
						<label htmlFor={`coldBeverages-${item}`}>{item}</label>
					</div>
				);
			})}
			{/* FRUIT */}
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
			{/* ADD ONS */}
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
			{/* SUBMIT BUTTON */}
			<input type='submit' />
		</form>
	);
}
