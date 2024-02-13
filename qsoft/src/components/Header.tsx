export default function Header() {
	return (
		<>
			<header>
				<div className="header__logo" />
				<form>
					<div className="header__search-pic" />
					<input
						placeholder="Найти..."
					/>
					</form>
				<hr className="header__separator" />
				<span className="header__profile-name">Константин</span>
				<span className="header__profile-pic" />
			</header>
		</>
	)
}