import React, { Component } from 'react';

class Filters extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			sortBy: "name",
			searchBySetence: ""
		}
	}

	isSelectedButton = (field) => {
		const { sortBy } = this.state;

		if (sortBy === field)
			return "is-selected";
		
		return;
	}

	setSortBy = ({ target }) => {
		if (!target.name) 
			return;
			
		this.setState({ sortBy: target.name });
		this.props.sortBy(target.name);
	}

	searchBy = () => {
		const { searchBySetence } = this.state;
		
		this.props.searchBy(searchBySetence);
	}

	render() {
		return (
			<div className="container" data-testid="filters">
          		<section className="filters">
          		  <div className="filters__search">
          		    <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={({ target }) => this.setState({ searchBySetence: target.value })}/>

          		    <button className="filters__search__icon" onClick={this.searchBy}>
          		      <i className="fa fa-search"/>
          		    </button>
          		  </div>

          		  <button className={`filters__item ${this.isSelectedButton("name")}`} name={"name"} onClick={this.setSortBy}>
          		    Nome <i className="fas fa-sort-down" />
          		  </button>

          		  <button className={`filters__item ${this.isSelectedButton("country")}`} name={"country"} onClick={this.setSortBy}>
          		    País <i className="fas fa-sort-down" />
          		  </button>

          		  <button className={`filters__item ${this.isSelectedButton("company")}`} name={"company"} onClick={this.setSortBy}>
          		    Empresa <i className="fas fa-sort-down" />
          		  </button>

          		  <button className={`filters__item ${this.isSelectedButton("department")}`} name={"department"} onClick={this.setSortBy}>
          		    Departamento <i className="fas fa-sort-down" />
          		  </button>

          		  <button className={`filters__item ${this.isSelectedButton("admissionDate")}`} name={"admissionDate"} onClick={this.setSortBy}>
          		    Data de admissão <i className="fas fa-sort-down" />
          		  </button>
          		</section>
        	</div>
		);
	}
}

export default Filters;
