const randomProfile = () => {
    const container = $('<div class="container"></div>'),
        row = $('<div class="row"></div>'),
        left_col = $('<div class="col-xs-4 col-md-4"></div>'),
        right_col = $('<div class="col-xs-8 col-md-8"></div>'),
        image = $(`<img class="img-circle"src="${settings.profile[0].picture.large}" alt="${settings.profile[0].name.first}">`),
        name = $(`<p><b>Name:</b> ${settings.profile[0].name.title} ${settings.profile[0].name.first} ${settings.profile[0].name.last}</p>`),
        gender = $(`<p><b>Gender:</b> ${settings.profile[0].gender}</p>`),
        city = $(`<p><b>City:</b> ${settings.profile[0].location.city}</p>`),
        email = $(`<p><b>E-mail:</b> ${settings.profile[0].email}</p>`),
        phone = $(`<p><b>Phone:</b> ${settings.profile[0].phone}</p>`);

    left_col.append(image);

    right_col.append(name);
    right_col.append(gender);
    right_col.append(city);
    right_col.append(email);
    right_col.append(phone);

    row.append(left_col);
    row.append(right_col);

    container.append(row);
    
    return container;
};