<script>
    let col;
    let id;
    let label;
    let type;
    let name;

    export {col, id, label, type, name}
</script>

<div class="container">
    <div class="row">
        <div class="col-{col}">
            <label for={id}>{label}</label>
            <input type={type} id={id} name={name}>
        </div>
    </div>
</div>
<style>
    input[type=text] {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      resize: vertical;
    }
    
    label {
      padding: 12px 12px 12px 0;
      display: inline-block;
    }
    
    input[type=submit] {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      float: right;
    }
    
    input[type=submit]:hover {
      background-color: #45a049;
    }

    .col-1 {
		width: 8.33%;
	}

	/* 2/12 */
	.col-2 {
		width: 16.66%;
	}

	/* 3/12 */
	.col-3 {
		width: 25%;
	}

	/* 4/12 */
	.col-4 {
		width: 33.33%;
	}

	/* 5/12 */
	.col-5 {
		width: 41.66%;
	}

	/* 6/12 */
	.col-6 {
		width: 50%;
	}

	/* 7/12 */
	.col-7 {
		width: 58.33%;
	}

	/* 8/12 */
	.col-8 {
		width: 66.66%;
	}

	/* 9/12 */
	.col-9 {
		width: 75%;
	}

	/* 10/12 */
	.col-10 {
		width: 83.33%;
	}

	/* 11/12 */
	.col-11 {
		width: 91.66%;
	}

	/* 12/12 */
	.col-12 {
		width: 100%;
	}
    
    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
    
    /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
      .col-25, .col-75, input[type=submit] {
        width: 100%;
        margin-top: 0;
      }
    }
    </style>