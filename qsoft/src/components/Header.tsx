export default function Header() {
	return (
		<>
			<header>
				<div className="header__logo pointer" />
				<form>
					<label htmlFor="search" className="header__search-pic" />
					<input
						id="search"
						placeholder="Найти..."
					/>
					</form>
				<hr className="header__separator" />
				<span className="header__profile-name">Константин</span>
				<span className="header__profile-pic pointer" />
			</header>
		</>
	)
}