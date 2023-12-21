import { UserVen, UserVol } from "./model"
import { connectToDB } from "./utils";

//To fetch vendor informations
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 5;

    try {
        connectToDB()
        const count = await UserVen.find({ vendorname: { $regex: regex } }).count();
        const users = await UserVen.find({ vendorname: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };

    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}

//To fetch volunteer informations
export const fetchUsersVol = async (q, page) => {
    const regex = new RegExp(q, "i");

    const ITEM_PER_PAGE = 3;

    try {
        connectToDB()
        const count = await UserVol.find({ volunteername: { $regex: regex } }).count();
        const users = await UserVol.find({ volunteername: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };

    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}

//To fetch single vendor information
export const fetchUserVendor = async (id) => {
    try {
        connectToDB()
        const user = await UserVen.findById(id);
        return user;

    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the user!");
    }
}

//To fetch single volunteer information
export const fetchUserVolunteer = async (id) => {
    try {
        connectToDB()
        const user = await UserVol.findById(id);
        return user;

    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the user!");
    }
}