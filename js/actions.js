// JavaScript Document

(function(){
	
	$('#username').on('blur', function(){
		
		var user_input = $('#username').val();
		if(user_input.match(/a{3}|b{3}|c{3}|d{3}|e{3}|f{3}|g{3}|h{3}|i{3}|j{3}|k{3}|l{3}|m{3}|n{3}|o{3}|p{3}|q{3}|r{3}|s{3}|t{3}|u{3}|v{3}|w{3}|x{3}|y{3}|z{3}/)){
			console.log('Invalid input');
			$('#username').val("");
			$('#username').attr('placeholder','Invalid Input');
		}else if(user_input.match(/A{3}|B{3}|C{3}|D{3}|E{3}|F{3}|G{3}|H{3}|I{3}|J{3}|K{3}|L{3}|M{3}|N{3}|O{3}|P{3}|Q{3}|R{3}|S{3}|T{3}|U{3}|V{3}|W{3}|X{3}|Y{3}|Z{3}/)){
			console.log('Invalid input');
			$('#username').val("");
			$('#username').attr('placeholder','Invalid Input');
		}else if(user_input.match(/0{4}|1{4}|2{4}|3{4}|4{4}|5{4}|6{4}|7{4}|8{4}|9{4}/)){
			console.log('Invalid input');
			$('#username').val("");
			$('#username').attr('placeholder','Invalid Input');
		}else{
		    console.log('Valid input');	
		}
		
	});
	
	
	
	$('#password').on('blur', function(){
		var c = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
		var user_input = $('#password').val();
		if(user_input.value.match(c)){
			console.log('correct');
		}else{
		   console.log('Invalid input');
			$('#password').val("");
			$('#password').attr('placeholder','Invalid Input');	
		}
		
	});
	
	
	
	$('#username1').on('blur', function(){
		
		var user_input = $('#username1').val();
		if(user_input.match(/a{3}|b{3}|c{3}|d{3}|e{3}|f{3}|g{3}|h{3}|i{3}|j{3}|k{3}|l{3}|m{3}|n{3}|o{3}|p{3}|q{3}|r{3}|s{3}|t{3}|u{3}|v{3}|w{3}|x{3}|y{3}|z{3}/)){
			console.log('Invalid input');
			$('#username1').val("");
			$('#username1').attr('placeholder','Invalid Input');
		}else if(user_input.match(/A{3}|B{3}|C{3}|D{3}|E{3}|F{3}|G{3}|H{3}|I{3}|J{3}|K{3}|L{3}|M{3}|N{3}|O{3}|P{3}|Q{3}|R{3}|S{3}|T{3}|U{3}|V{3}|W{3}|X{3}|Y{3}|Z{3}/)){
			console.log('Invalid input');
			$('#username1').val("");
			$('#username1').attr('placeholder','Invalid Input');
		}else if(user_input.match(/0{4}|1{4}|2{4}|3{4}|4{4}|5{4}|6{4}|7{4}|8{4}|9{4}/)){
			console.log('Invalid input');
			$('#username1').val("");
			$('#username1').attr('placeholder','Invalid Input');
		}else{
		    console.log('Valid input');	
		}
		
	});
	
	
	$('#password1').on('blur', function(){
		
		var user_input = $('#password1').val();
		if(user_input.match(/a{3}|b{3}|c{3}|d{3}|e{3}|f{3}|g{3}|h{3}|i{3}|j{3}|k{3}|l{3}|m{3}|n{3}|o{3}|p{3}|q{3}|r{3}|s{3}|t{3}|u{3}|v{3}|w{3}|x{3}|y{3}|z{3}/)){
			console.log('Invalid input');
			$('#password1').val("");
			$('#password1').attr('placeholder','Invalid Input');
		}else if(user_input.match(/A{3}|B{3}|C{3}|D{3}|E{3}|F{3}|G{3}|H{3}|I{3}|J{3}|K{3}|L{3}|M{3}|N{3}|O{3}|P{3}|Q{3}|R{3}|S{3}|T{3}|U{3}|V{3}|W{3}|X{3}|Y{3}|Z{3}/)){
			console.log('Invalid input');
			$('#password1').val("");
			$('#password1').attr('placeholder','Invalid Input');
		}else if(user_input.match(/0{4}|1{4}|2{4}|3{4}|4{4}|5{4}|6{4}|7{4}|8{4}|9{4}/)){
			console.log('Invalid input');
			$('#password1').val("");
			$('#password1').attr('placeholder','Invalid Input');
		}else{
		    console.log('Valid input');	
		}
		
	});
	
		
})()