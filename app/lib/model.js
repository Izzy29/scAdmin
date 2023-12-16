import mongoose from "mongoose";

const userVendorSchema = new mongoose.Schema(
    {
        vendorname: {
            type: String,
            required: true,
            unique: true,
        },
        registrationdate: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        businesstype: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const userVolunteerSchema = new mongoose.Schema(
    {
        volunteername: {
            type: String,
            required: true,
            unique: true,
        },
        registrationdate: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        association: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const UserVen = mongoose.models.UserVendor || mongoose.model("UserVendor", userVendorSchema);
export const UserVol = mongoose.models.UserVolunteer || mongoose.model("UserVolunteer", userVolunteerSchema);