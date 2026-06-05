import Complaint from "../models/complaint";

const createComplaint = async (message) => {
  const complaint = await Complaint.create({
    message,
  });
  return complaint
};

export default createComplaint;
