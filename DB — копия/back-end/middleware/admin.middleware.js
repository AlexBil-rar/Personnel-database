const DerectorProtect = (req, res, next) => {
    if(req.staff && req.staff.isDirector == true) {
        next();
    } else {
        res.status(401);
        throw new Error("Недостаточно прав для просмотра страницы (доступно только директора)")
    }
}

const AdminProtect = (req, res, next) => {
    if(req.staff && req.staff.isAdmin == true) {
        next();
    } else {
        res.status(401);
        throw new Error("Недостаточно прав для просмотра страницы (доступно только администраторам)")
    }
}

const BakerProtect = (req, res, next) => {
    if(req.staff && req.staff.isBaker == true) {
        next();
    } else {
        res.status(401);
        throw new Error("Недостаточно прав для просмотра страницы (доступно только администраторам)")
    }
}

const SellerProtect = (req, res, next) => {
    if(req.staff && req.staff.isSeller == true) {
        next();
    } else {
        res.status(401);
        throw new Error("Недостаточно прав для просмотра страницы (доступно только администраторам)")
    }
}



export { DerectorProtect, AdminProtect, BakerProtect, SellerProtect };