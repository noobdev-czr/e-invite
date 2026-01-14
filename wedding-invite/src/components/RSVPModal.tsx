import { motion } from "framer-motion";

interface Props {
  onClose: () => void;
}

export default function RSVPModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl p-6 w-80"
      >
        <h2 className="text-xl font-serif mb-4">RSVP</h2>

        <form className="space-y-4">
          <input
            placeholder="Full Name"
            className="w-full border rounded px-3 py-2"
          />
          <select className="w-full border rounded px-3 py-2">
            <option>Will Attend</option>
            <option>Cannot Attend</option>
          </select>
          <button
            type="submit"
            className="w-full bg-gold text-white py-2 rounded"
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
